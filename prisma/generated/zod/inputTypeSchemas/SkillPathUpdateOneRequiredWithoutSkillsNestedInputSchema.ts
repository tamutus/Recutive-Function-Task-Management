import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutSkillsInputSchema } from './SkillPathCreateWithoutSkillsInputSchema';
import { SkillPathUncheckedCreateWithoutSkillsInputSchema } from './SkillPathUncheckedCreateWithoutSkillsInputSchema';
import { SkillPathCreateOrConnectWithoutSkillsInputSchema } from './SkillPathCreateOrConnectWithoutSkillsInputSchema';
import { SkillPathUpsertWithoutSkillsInputSchema } from './SkillPathUpsertWithoutSkillsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathUpdateToOneWithWhereWithoutSkillsInputSchema } from './SkillPathUpdateToOneWithWhereWithoutSkillsInputSchema';
import { SkillPathUpdateWithoutSkillsInputSchema } from './SkillPathUpdateWithoutSkillsInputSchema';
import { SkillPathUncheckedUpdateWithoutSkillsInputSchema } from './SkillPathUncheckedUpdateWithoutSkillsInputSchema';

export const SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.SkillPathUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => SkillPathUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillPathUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => SkillPathUpdateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema;
