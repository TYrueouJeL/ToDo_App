function addTask(tache) {
    let task = document.createElement('div');

    task.innerHTML = `
    <div class="grid grid-cols-[1fr_24px] items-center gap-6">
        <label class="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-slate-100">
            <input type="checkbox" class="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-pink-500 dark:accent-pink-600 checked:appearance-auto">
            <span class="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">${devoir.titre}</span>
        </label>
        <div class="size-[26px] rounded-md p-1 hover:bg-red-50 hover:text-red-500 block peer-has-[:checked]:hidden">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    </div>`;

    document.querySelector('#taskContent').appendChild(task);
}