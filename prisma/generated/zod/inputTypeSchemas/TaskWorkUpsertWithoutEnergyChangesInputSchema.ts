import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUpdateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema';
import { TaskWorkCreateWithoutEnergyChangesInputSchema } from './TaskWorkCreateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const TaskWorkUpsertWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpsertWithoutEnergyChangesInput> = z.object({
  update: z.union([ z.lazy(() => TaskWorkUpdateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema) ]),
  where: z.lazy(() => TaskWorkWhereInputSchema).optional()
}).strict();

export default TaskWorkUpsertWithoutEnergyChangesInputSchema;
