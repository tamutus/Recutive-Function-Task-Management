import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutPrioritiesInputSchema } from './SkillPathCreateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedCreateWithoutPrioritiesInputSchema } from './SkillPathUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillPathCreateOrConnectWithoutPrioritiesInputSchema } from './SkillPathCreateOrConnectWithoutPrioritiesInputSchema';
import { SkillPathUpsertWithoutPrioritiesInputSchema } from './SkillPathUpsertWithoutPrioritiesInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './SkillPathUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { SkillPathUpdateWithoutPrioritiesInputSchema } from './SkillPathUpdateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillPathUncheckedUpdateWithoutPrioritiesInputSchema';

export const SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.SkillPathUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => SkillPathUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillPathUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
