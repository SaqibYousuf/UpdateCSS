const inputs = document.querySelectorAll(".controls input");

function handle() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
}

inputs.forEach(input => input.addEventListener('change', handle));
inputs.forEach(input => input.addEventListener('mousemove', handle));
