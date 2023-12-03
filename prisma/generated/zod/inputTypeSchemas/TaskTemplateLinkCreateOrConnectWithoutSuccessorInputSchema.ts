import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema';

export const TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateOrConnectWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema;
