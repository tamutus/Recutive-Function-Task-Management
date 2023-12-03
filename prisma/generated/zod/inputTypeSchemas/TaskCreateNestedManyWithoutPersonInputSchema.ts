import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPersonInputSchema } from './TaskCreateWithoutPersonInputSchema';
import { TaskUncheckedCreateWithoutPersonInputSchema } from './TaskUncheckedCreateWithoutPersonInputSchema';
import { TaskCreateOrConnectWithoutPersonInputSchema } from './TaskCreateOrConnectWithoutPersonInputSchema';
import { TaskCreateManyPersonInputEnvelopeSchema } from './TaskCreateManyPersonInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPersonInputSchema),z.lazy(() => TaskCreateWithoutPersonInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutPersonInputSchema),z.lazy(() => TaskCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskCreateNestedManyWithoutPersonInputSchema;
