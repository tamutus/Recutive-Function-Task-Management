import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const TaskWorkUpsertWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpsertWithoutPrivateEnergyChangesInput> = z.object({
  update: z.union([ z.lazy(() => TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema) ]),
  where: z.lazy(() => TaskWorkWhereInputSchema).optional()
}).strict();

export default TaskWorkUpsertWithoutPrivateEnergyChangesInputSchema;
