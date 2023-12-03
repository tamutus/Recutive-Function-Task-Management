import { z } from 'zod';
import { InputJsonValue } from '../inputTypeSchemas/InputJsonValue'

/////////////////////////////////////////
// PROJECT TEMPLATES TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * Connections between projects and tasks. This encourages tasks that help you reach multiple goals. Also stores how many of this task is needed by a given project.
 */
export const ProjectTemplatesToTaskTemplatesSchema = z.object({
  projectId: z.number().int(),
  taskId: z.number().int(),
  /**
   * Number of tasks that a project should create from this template when deploying a project template. Default is 1, and 0 means there's no count—either it should just be done a lot or
   */
  count: z.number().int(),
  schedule: InputJsonValue,
})

export type ProjectTemplatesToTaskTemplates = z.infer<typeof ProjectTemplatesToTaskTemplatesSchema>

export default ProjectTemplatesToTaskTemplatesSchema;
