import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema;
