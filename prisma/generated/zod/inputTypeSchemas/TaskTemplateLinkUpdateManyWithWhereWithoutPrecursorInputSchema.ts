import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkScalarWhereInputSchema } from './TaskTemplateLinkScalarWhereInputSchema';
import { TaskTemplateLinkUpdateManyMutationInputSchema } from './TaskTemplateLinkUpdateManyMutationInputSchema';
import { TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInputSchema';

export const TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskTemplateLinkUpdateManyMutationInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema;
