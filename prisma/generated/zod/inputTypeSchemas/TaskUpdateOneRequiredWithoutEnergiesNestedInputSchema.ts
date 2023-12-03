import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutEnergiesInputSchema } from './TaskCreateWithoutEnergiesInputSchema';
import { TaskUncheckedCreateWithoutEnergiesInputSchema } from './TaskUncheckedCreateWithoutEnergiesInputSchema';
import { TaskCreateOrConnectWithoutEnergiesInputSchema } from './TaskCreateOrConnectWithoutEnergiesInputSchema';
import { TaskUpsertWithoutEnergiesInputSchema } from './TaskUpsertWithoutEnergiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutEnergiesInputSchema } from './TaskUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { TaskUpdateWithoutEnergiesInputSchema } from './TaskUpdateWithoutEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutEnergiesInputSchema } from './TaskUncheckedUpdateWithoutEnergiesInputSchema';

export const TaskUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => TaskUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutEnergiesNestedInputSchema;
