import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutEnergyChangesInputSchema } from './TaskWorkCreateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema';
import { TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema } from './TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';

export const TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateNestedOneWithoutEnergyChangesInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema).optional(),
  connect: z.lazy(() => TaskWorkWhereUniqueInputSchema).optional()
}).strict();

export default TaskWorkCreateNestedOneWithoutEnergyChangesInputSchema;
