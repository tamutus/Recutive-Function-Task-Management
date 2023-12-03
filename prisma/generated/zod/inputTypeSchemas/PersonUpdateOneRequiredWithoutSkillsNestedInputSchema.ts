import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillsInputSchema } from './PersonCreateWithoutSkillsInputSchema';
import { PersonUncheckedCreateWithoutSkillsInputSchema } from './PersonUncheckedCreateWithoutSkillsInputSchema';
import { PersonCreateOrConnectWithoutSkillsInputSchema } from './PersonCreateOrConnectWithoutSkillsInputSchema';
import { PersonUpsertWithoutSkillsInputSchema } from './PersonUpsertWithoutSkillsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutSkillsInputSchema } from './PersonUpdateToOneWithWhereWithoutSkillsInputSchema';
import { PersonUpdateWithoutSkillsInputSchema } from './PersonUpdateWithoutSkillsInputSchema';
import { PersonUncheckedUpdateWithoutSkillsInputSchema } from './PersonUncheckedUpdateWithoutSkillsInputSchema';

export const PersonUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => PersonUpdateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutSkillsNestedInputSchema;
