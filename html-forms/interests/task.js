const interest__check = document.querySelectorAll('.interest__check');

function handleChange (event) {
    const checkbox = event.target;

    updateChildrenCheckboxes(checkbox);

    updateParentCheckboxes(checkbox);
}

function updateChildrenCheckboxes (checkbox) {
    const childCheckboxes = checkbox.closest('.interest').querySelectorAll('.interest__check')

    childCheckboxes.forEach(childCheckboxes => {
        if (childCheckboxes.checked !== checkbox.checked) {
            childCheckboxes.checked = checkbox.checked;
            updateChildrenCheckboxes(childCheckboxes);
        }
    });
}

function updateParentCheckboxes(checkbox) {
    const parentInterest = checkbox.closest('.interest').parentNode.closest('.interest')

    if (!parentInterest) {
        return;
    }

    const parentCheckbox = parentInterest.querySelector('.interest__check')
    const siblingCheckboxes = [...parentInterest.querySelectorAll('.interest__check')].filter((item) => item != parentCheckbox);

    let checkedCount = 0;
    let indeterminateCount = 0;

    siblingCheckboxes.forEach(siblingCheckboxes => {
        if (siblingCheckboxes.checked) {
            checkedCount++;
        } else if (siblingCheckboxes.indeterminate) {
            indeterminateCount++
        } 
    });

    if (checkedCount === siblingCheckboxes.length && indeterminateCount === 0) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
    } else if (checkedCount === 0 && indeterminateCount === 0) {
        parentCheckbox.checked =false;
        parentCheckbox.indeterminate = false;
    } else {
        parentCheckbox.checked =false;
        parentCheckbox.indeterminate = true;
    }

    updateParentCheckboxes(parentCheckbox);
}

interest__check.forEach(checkbox => {
    checkbox.addEventListener('change', handleChange);
})
