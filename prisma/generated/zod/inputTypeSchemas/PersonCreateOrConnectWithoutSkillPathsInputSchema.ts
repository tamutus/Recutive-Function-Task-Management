import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutSkillPathsInputSchema } from './PersonCreateWithoutSkillPathsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathsInputSchema } from './PersonUncheckedCreateWithoutSkillPathsInputSchema';

export const PersonCreateOrConnectWithoutSkillPathsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutSkillPathsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutSkillPathsInputSchema;
