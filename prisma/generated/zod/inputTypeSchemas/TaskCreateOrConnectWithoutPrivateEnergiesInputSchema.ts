import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutPrivateEnergiesInputSchema } from './TaskCreateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const TaskCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutPrivateEnergiesInputSchema;
