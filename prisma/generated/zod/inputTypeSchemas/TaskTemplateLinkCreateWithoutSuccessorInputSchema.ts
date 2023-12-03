import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema } from './TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema';

export const TaskTemplateLinkCreateWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateWithoutSuccessorInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  precursor: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema)
}).strict();

export default TaskTemplateLinkCreateWithoutSuccessorInputSchema;
