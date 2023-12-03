import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkCreateWithoutEnergyChangesInputSchema } from './TaskWorkCreateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema';

export const TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateOrConnectWithoutEnergyChangesInput> = z.object({
  where: z.lazy(() => TaskWorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema) ]),
}).strict();

export default TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema;
