import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutEnergiesInputSchema } from './TaskCreateWithoutEnergiesInputSchema';
import { TaskUncheckedCreateWithoutEnergiesInputSchema } from './TaskUncheckedCreateWithoutEnergiesInputSchema';
import { TaskCreateOrConnectWithoutEnergiesInputSchema } from './TaskCreateOrConnectWithoutEnergiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutEnergiesInputSchema;
