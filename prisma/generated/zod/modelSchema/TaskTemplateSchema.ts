import { z } from 'zod';
import { InputJsonValue } from '../inputTypeSchemas/InputJsonValue'

/////////////////////////////////////////
// TASK TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * Project templates will carry task templates, which can be cloned into tasks.
 */
export const TaskTemplateSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  completionRequirements: z.string().nullable(),
  color: z.string().nullable(),
  links: z.string().array(),
  schedule: InputJsonValue,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TaskTemplate = z.infer<typeof TaskTemplateSchema>

export default TaskTemplateSchema;
