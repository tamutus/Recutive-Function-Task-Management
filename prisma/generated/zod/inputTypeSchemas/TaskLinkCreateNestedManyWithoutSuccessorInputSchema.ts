import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateWithoutSuccessorInputSchema } from './TaskLinkCreateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskLinkUncheckedCreateWithoutSuccessorInputSchema';
import { TaskLinkCreateOrConnectWithoutSuccessorInputSchema } from './TaskLinkCreateOrConnectWithoutSuccessorInputSchema';
import { TaskLinkCreateManySuccessorInputEnvelopeSchema } from './TaskLinkCreateManySuccessorInputEnvelopeSchema';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';

export const TaskLinkCreateNestedManyWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkCreateNestedManyWithoutSuccessorInput> = z.object({
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => TaskLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskLinkCreateNestedManyWithoutSuccessorInputSchema;
