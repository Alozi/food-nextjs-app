'use client';

import { useFormStatus } from "react-dom";

export default function MealsSubmitButton() {
    const status = useFormStatus();

    return (<button type="submit" disabled={status.pending}>
        {status.pending === true ? 'Submitting...' : 'Share Meal'}
    </button>);
}