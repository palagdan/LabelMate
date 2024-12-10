import * as core from '@actions/core';
import {addLabelToIssueAction} from "./actions";


async function run(): Promise<void> {
    try {
        await addLabelToIssueAction();
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        } else {
            core.setFailed('An unknown error occurred');
        }
    }
}

run();
