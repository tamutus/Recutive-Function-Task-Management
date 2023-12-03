import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUpsertWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUpsertWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema';

export const TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema: z.ZodType<Prisma.TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskWorkCreateOrConnectWithoutPrivateEnergyChangesInputSchema).optional(),
  upsert: z.lazy(() => TaskWorkUpsertWithoutPrivateEnergyChangesInputSchema).optional(),
  connect: z.lazy(() => TaskWorkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema) ]).optional(),
}).strict();

export default TaskWorkUpdateOneRequiredWithoutPrivateEnergyChangesNestedInputSchema;
