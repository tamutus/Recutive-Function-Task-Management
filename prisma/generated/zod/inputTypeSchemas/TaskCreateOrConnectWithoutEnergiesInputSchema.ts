import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutEnergiesInputSchema } from './TaskCreateWithoutEnergiesInputSchema';
import { TaskUncheckedCreateWithoutEnergiesInputSchema } from './TaskUncheckedCreateWithoutEnergiesInputSchema';

export const TaskCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutEnergiesInputSchema;
