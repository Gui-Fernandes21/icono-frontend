<template>
	<section id="dash-container">
		<section class="welcome-section">
			<h1>Welcome back</h1>
		</section>

    <div class="grid-container">
      <ProfileSection></ProfileSection>
      <ClassesSection></ClassesSection>
      <MembershipSection></MembershipSection>
    </div>
	</section>
</template>

<script>
import ProfileSection from './components/profile/ProfileSection'
import ClassesSection from './components/classes/ClassesSection'
import MembershipSection from './components/membership/MembershipSection'

export default {
  components: {
    ProfileSection,
    ClassesSection,
    MembershipSection
  },
  methods: {
    init() {
      this.$store.dispatch("getUser");
      this.$store.dispatch("getProfile");
      this.$store.dispatch("getMembership");
    }
  },
	computed: {
		user() {
			return this.$store.getters.getUser;
		},
	},
	beforeMount() {
		if (!this.$store.getters.isAuth) this.$router.replace("/home");

		if (!this.$store.getters.getUser) this.init();
	},
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto;

  gap: 20px;

  margin: 4rem;
}
</style>