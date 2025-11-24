<script>
    import mobileNav from "../store/store";
</script>

<nav class="lg:hidden flex justify-center items-center fixed z-10 top-0 left-0 w-full h-full bg-white transform transition-transform duration-1000 {$mobileNav ? "translate-y-0" : "-translate-y-200"}">
    <ul class="flex flex-col gap-5 justify-between items-center text-center font-semibold">
        <li>
            <a href="/" onclick={() => $mobileNav = !$mobileNav} class="text-lg">Home</a>
        </li>
        <li>
            <a href="/about" onclick={() => $mobileNav = !$mobileNav} class="text-lg">About</a>
        </li>
        <li>
            <a href="/admission" onclick={() => $mobileNav = !$mobileNav} class="text-lg">Admissions</a>
        </li>
        <li>
            <a href="/academics" onclick={() => $mobileNav = !$mobileNav} class="text-lg">Academics</a>
        </li>
        <li>
            <a href="/contact" onclick={() => $mobileNav = !$mobileNav} class="text-lg">Contact</a>
        </li>
    </ul>
</nav>

<style>
    li{
        color: #2a6be1;
    }

    li:hover,
    li:active{
        color: #cb0101;
    }
</style>