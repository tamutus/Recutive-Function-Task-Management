import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithoutSuccessorInputSchema } from './TaskTemplateLinkUpdateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema';

export const TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema;
