import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';

export const TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema).optional(),
  connect: z.lazy(() => TaskWorkWhereUniqueInputSchema).optional()
}).strict();

export default TaskWorkCreateNestedOneWithoutPrivateEnergyChangesInputSchema;
