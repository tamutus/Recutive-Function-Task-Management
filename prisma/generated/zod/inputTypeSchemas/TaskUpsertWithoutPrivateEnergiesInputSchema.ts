import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutPrivateEnergiesInputSchema } from './TaskUpdateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { TaskCreateWithoutPrivateEnergiesInputSchema } from './TaskCreateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutPrivateEnergiesInputSchema;
