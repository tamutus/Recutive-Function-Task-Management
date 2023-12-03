import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';

export const PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateNestedManyWithoutSkillPathInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema;
