import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutEnergiesInputSchema } from './TaskTemplateCreateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { TaskTemplateCreateOrConnectWithoutEnergiesInputSchema } from './TaskTemplateCreateOrConnectWithoutEnergiesInputSchema';
import { TaskTemplateUpsertWithoutEnergiesInputSchema } from './TaskTemplateUpsertWithoutEnergiesInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { TaskTemplateUpdateWithoutEnergiesInputSchema } from './TaskTemplateUpdateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema;
