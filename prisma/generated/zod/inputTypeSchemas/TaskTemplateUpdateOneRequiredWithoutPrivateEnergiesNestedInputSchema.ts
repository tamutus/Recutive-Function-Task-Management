import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUpsertWithoutPrivateEnergiesInputSchema } from './TaskTemplateUpsertWithoutPrivateEnergiesInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
