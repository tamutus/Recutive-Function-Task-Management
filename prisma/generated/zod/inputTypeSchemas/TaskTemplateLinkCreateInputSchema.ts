import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema } from './TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema';
import { TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema } from './TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema';

export const TaskTemplateLinkCreateInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateInput> = z.object({
  linkType: z.lazy(() => LinkTypeSchema).optional(),
  precursor: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema),
  successor: z.lazy(() => TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema)
}).strict();

export default TaskTemplateLinkCreateInputSchema;
