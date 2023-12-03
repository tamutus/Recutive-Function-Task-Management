import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrivateEnergiesInputSchema } from './TaskCreateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TaskCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutPrivateEnergiesInputSchema;
