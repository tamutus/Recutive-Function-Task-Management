import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillPathsInputSchema } from './PersonCreateWithoutSkillPathsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathsInputSchema } from './PersonUncheckedCreateWithoutSkillPathsInputSchema';
import { PersonCreateOrConnectWithoutSkillPathsInputSchema } from './PersonCreateOrConnectWithoutSkillPathsInputSchema';
import { PersonUpsertWithoutSkillPathsInputSchema } from './PersonUpsertWithoutSkillPathsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutSkillPathsInputSchema } from './PersonUpdateToOneWithWhereWithoutSkillPathsInputSchema';
import { PersonUpdateWithoutSkillPathsInputSchema } from './PersonUpdateWithoutSkillPathsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathsInputSchema';

export const PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutSkillPathsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillPathsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutSkillPathsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutSkillPathsInputSchema),z.lazy(() => PersonUpdateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema;
