import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema } from './TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema';

export const TaskTemplateLinkCreateWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateWithoutPrecursorInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  successor: z.lazy(() => TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema)
}).strict();

export default TaskTemplateLinkCreateWithoutPrecursorInputSchema;
