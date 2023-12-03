import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreatelinksInputSchema } from './TaskTemplateCreatelinksInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const TaskTemplateCreateManyInputSchema: z.ZodType<Prisma.TaskTemplateCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TaskTemplateCreateManyInputSchema;
