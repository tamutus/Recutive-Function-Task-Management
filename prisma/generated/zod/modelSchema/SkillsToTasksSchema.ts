import { z } from 'zod';

/////////////////////////////////////////
// SKILLS TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * This join table tracks which skills are used in which tasks. Since people can customize tasks, they should also be able to denote for their own purposes whether a task they've customized uses a given skill.
 */
export const SkillsToTasksSchema = z.object({
  taskId: z.number().int(),
  skillId: z.number().int(),
})

export type SkillsToTasks = z.infer<typeof SkillsToTasksSchema>

export default SkillsToTasksSchema;
