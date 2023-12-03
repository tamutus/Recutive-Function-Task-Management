import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TaskWorkCountOutputTypeSelectSchema: z.ZodType<Prisma.TaskWorkCountOutputTypeSelect> = z.object({
  energyChanges: z.boolean().optional(),
  privateEnergyChanges: z.boolean().optional(),
}).strict();

export default TaskWorkCountOutputTypeSelectSchema;
