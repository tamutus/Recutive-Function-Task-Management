import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrivateEnergiesInputSchema } from './SkillCreateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedCreateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { SkillCreateOrConnectWithoutPrivateEnergiesInputSchema } from './SkillCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { SkillUpsertWithoutPrivateEnergiesInputSchema } from './SkillUpsertWithoutPrivateEnergiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './SkillUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { SkillUpdateWithoutPrivateEnergiesInputSchema } from './SkillUpdateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
