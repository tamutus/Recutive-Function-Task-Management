import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema';

export const TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInput> = z.object({
  where: z.lazy(() => TaskWorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema) ]),
}).strict();

export default TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema;
