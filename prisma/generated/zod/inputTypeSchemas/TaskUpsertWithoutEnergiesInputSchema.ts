import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutEnergiesInputSchema } from './TaskUpdateWithoutEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutEnergiesInputSchema } from './TaskUncheckedUpdateWithoutEnergiesInputSchema';
import { TaskCreateWithoutEnergiesInputSchema } from './TaskCreateWithoutEnergiesInputSchema';
import { TaskUncheckedCreateWithoutEnergiesInputSchema } from './TaskUncheckedCreateWithoutEnergiesInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutEnergiesInputSchema;
