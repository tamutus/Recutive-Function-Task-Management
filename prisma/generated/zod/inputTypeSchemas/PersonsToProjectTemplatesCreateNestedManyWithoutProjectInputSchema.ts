import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';

export const PersonsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema;
