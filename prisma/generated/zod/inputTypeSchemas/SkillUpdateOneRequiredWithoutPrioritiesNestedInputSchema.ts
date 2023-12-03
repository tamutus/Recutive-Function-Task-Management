import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrioritiesInputSchema } from './SkillCreateWithoutPrioritiesInputSchema';
import { SkillUncheckedCreateWithoutPrioritiesInputSchema } from './SkillUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillCreateOrConnectWithoutPrioritiesInputSchema } from './SkillCreateOrConnectWithoutPrioritiesInputSchema';
import { SkillUpsertWithoutPrioritiesInputSchema } from './SkillUpsertWithoutPrioritiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './SkillUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { SkillUpdateWithoutPrioritiesInputSchema } from './SkillUpdateWithoutPrioritiesInputSchema';
import { SkillUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillUncheckedUpdateWithoutPrioritiesInputSchema';

export const SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => SkillUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
