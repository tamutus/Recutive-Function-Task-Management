import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutEnergyChangesInputSchema } from './TaskWorkCreateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema';
import { TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema } from './TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema';
import { TaskWorkUpsertWithoutEnergyChangesInputSchema } from './TaskWorkUpsertWithoutEnergyChangesInputSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInputSchema } from './TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInputSchema';
import { TaskWorkUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUpdateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema';

export const TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema: z.ZodType<Prisma.TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskWorkCreateOrConnectWithoutEnergyChangesInputSchema).optional(),
  upsert: z.lazy(() => TaskWorkUpsertWithoutEnergyChangesInputSchema).optional(),
  connect: z.lazy(() => TaskWorkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUpdateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema) ]).optional(),
}).strict();

export default TaskWorkUpdateOneRequiredWithoutEnergyChangesNestedInputSchema;
