import { z } from 'zod';

/////////////////////////////////////////
// PROJECTS TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * m-n join table of projects and tasks.
 */
export const ProjectsToTasksSchema = z.object({
  projectId: z.number().int(),
  taskId: z.number().int(),
})

export type ProjectsToTasks = z.infer<typeof ProjectsToTasksSchema>

export default ProjectsToTasksSchema;
