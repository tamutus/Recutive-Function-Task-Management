import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutEnergiesInputSchema } from './TaskTemplateCreateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { TaskTemplateCreateOrConnectWithoutEnergiesInputSchema } from './TaskTemplateCreateOrConnectWithoutEnergiesInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutEnergiesInputSchema;
