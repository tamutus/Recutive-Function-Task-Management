import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';
import { TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema';

export const TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInput> = z.object({
  where: z.lazy(() => TaskWorkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutPrivateEnergyChangesInputSchema) ]),
}).strict();

export default TaskWorkUpdateToOneWithWhereWithoutPrivateEnergyChangesInputSchema;
