<script>
    import logo from '$lib/assets/logo.svg'
</script>

<div class="logo_holder" draggable="false">
    <img class="school_logo" src={logo} alt="school logo" draggable="false">
</div>

<style>
.logo_holder {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.322)}

.school_logo {
    width:  10rem;
    display: block;
    user-select: none;

}
</style>