import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkScalarWhereInputSchema } from './TaskTemplateLinkScalarWhereInputSchema';
import { TaskTemplateLinkUpdateManyMutationInputSchema } from './TaskTemplateLinkUpdateManyMutationInputSchema';
import { TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorInputSchema';

export const TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskTemplateLinkUpdateManyMutationInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpdateManyWithWhereWithoutSuccessorInputSchema;
